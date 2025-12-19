function solve() {
  const height = document.getElementById("input")
    .value.split(",").map(Number);

  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let water = new Array(height.length).fill(0);
  let total = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water[left] = leftMax - height[left];
      total += water[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water[right] = rightMax - height[right];
      total += water[right];
      right--;
    }
  }

  document.getElementById("result").innerText =
    `Total Water Stored: ${total} Units`;

  draw(height, water);
}

function draw(height, water) {
  const chart = document.getElementById("chart");
  chart.innerHTML = "";

  const scale = 30; // height multiplier

  for (let i = 0; i < height.length; i++) {
    const bar = document.createElement("div");
    bar.className = "bar";

    const block = document.createElement("div");
    block.className = "block";
    block.style.height = height[i] * scale + "px";

    const waterDiv = document.createElement("div");
    waterDiv.className = "water";
    waterDiv.style.height = water[i] * scale + "px";
    waterDiv.style.bottom = height[i] * scale + "px";

    bar.appendChild(block);
    bar.appendChild(waterDiv);
    chart.appendChild(bar);
  }
}
