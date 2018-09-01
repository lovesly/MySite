function DanceSpan(element, x, y) {
    element.position(x, y);

    this.brownian = function() {
        if (element.class().indexOf('hover') !== -1) {
            // can we also add a keyframe or transition?
            return;
        }
        x += random(-3, 3);
        y += random(-3, 3);
        element.position(x, y);
    };
}

// 需要一个边界检测
// 如何加一个破碎特效呢？
    // word span 组成 p tag， 初始移动方向， 速度均不同， 速度递减到0， 做无规则运动
    