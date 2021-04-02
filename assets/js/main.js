var ctx = c.getContext("2d");
    const bird = new Image();
    bird.src = "assets/img/eddiebird.png";
    birdX = birdDY = score = bestScore = 0;
    interval = birdSize = pipeWidth = topPipeBottomY = 24;
    birdY = pipeGap = 170;
    canvasSize = pipeX = 400;
    c.onclick = () => (birdDY = 9);
    
    setInterval(() => {
      ctx.fillStyle = "skyblue";
      ctx.fillRect(0,0,canvasSize,canvasSize);
      birdY -= birdDY -= 0.5;
      ctx.drawImage(bird, birdX, birdY, birdSize * (724/520), birdSize);
      ctx.fillStyle = "green";
      pipeX -= 8; 
      pipeX < -pipeWidth && ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random())); 
      ctx.fillRect(pipeX, 0, pipeWidth, topPipeBottomY);
      ctx.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); 
      ctx.fillStyle = "black";
      ctx.fillText(`Current: ${score++}`, 10, 25); 
      bestScore = bestScore < score ? score : bestScore; 
      ctx.fillText(`Best: ${bestScore}`, 320, 25); 
      (((birdY < topPipeBottomY || birdY > topPipeBottomY + pipeGap) && pipeX < birdSize * (952/452))
        || birdY > canvasSize) && ((birdDY = 3), (birdY = 200), (pipeX = canvasSize), (score = 0)); 
    }, interval)