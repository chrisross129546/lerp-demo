const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const lerp = (a, b, t) => a + (b - a) * t;

const resizeCanvas = (width = innerWidth, height = innerHeight) => {
    canvas.width = width;
    canvas.height = height;
};

resizeCanvas();

requestAnimationFrame(function frame() {
    start = lerp(start, target, distance);

    context.resetTransform();
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.setTransform(1, 0, 0, 1, canvas.width / 2, canvas.height / 2);

    context.fillStyle = '#3d3f42';
    context.beginPath();
    context.roundRect(-250, 0, 500, 60, 200);
    context.fill();

    context.fillStyle = '#8ecc51';
    context.beginPath();
    context.roundRect(-240, 10, 480 * (start / 9), 40, 200);
    context.fill();

    requestAnimationFrame(frame);
});

let start = 1,
    target = 9,
    distance = 0.1;

addEventListener('resize', resizeCanvas());
addEventListener('keydown', ({ key }) => {
    if (!Number.isFinite(+key) || key < 1) return;

    target = key;
});
