/**
 * 手势检测模块 - 基于MediaPipe
 */
export class GestureDetector {
    constructor(videoElement) {
        this.video = videoElement;
        this.hands = null;
        this.camera = null;
        this.canvasCtx = null;
        this.onDetected = null;
    }
    
    async init(callback) {
        this.onDetected = callback;
        
        // 初始化MediaPipe Hands
        this.hands = new Hands({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }
        });
        
        this.hands.setOptions({
            maxNumHands: 2,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        
        this.hands.onResults(this.onResults.bind(this));
        
        // 初始化Camera
        this.camera = new Camera(this.video, {
            onFrame: async () => {
                await this.hands.send({ image: this.video });
            },
            width: 1280,
            height: 720
        });
        
        await this.camera.initialize();
        this.camera.start();
    }
    
    onResults(results) {
        if (!results.multiHandLandmarks) return;
        
        // 处理每只手
        results.multiHandLandmarks.forEach((landmarks, index) => {
            const handedness = results.multiHandedness[index];
            this.onDetected(landmarks, handedness.label);
        });
    }
    
    stop() {
        if (this.camera) {
            this.camera.stop();
        }
    }
}
