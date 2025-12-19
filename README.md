## 💧 Water Tank Problem (Trapping Rain Water) ##
**📌 Problem Statement**

Given an array of non-negative integers where each integer represents the height of a block, compute how many units of water can be stored between the blocks after rainfall.

This project implements a frontend web application using Vanilla JavaScript, HTML, and CSS to:

Calculate the trapped water

Visually represent blocks and stored water

**🧠 Example**

Input

[0,4,0,0,0,6,0,6,4,0]


Output

Total Water Stored: 18 Units


**🟨 Yellow blocks represent walls**
**🟦 Blue blocks represent stored water**

**🚀 Features**

* Efficient O(n) two-pointer algorithm

* Dynamic input handling

* Clear visual representation using bars

* Pure Vanilla JavaScript (No frameworks)

* Responsive and easy to understand UI

**🛠️ Technologies Used**

* HTML5

* CSS3

* JavaScript (ES6)

**🧮 Algorithm Used**

* Two Pointer Technique

**Steps:**

* use two pointers (left and right)

* Track leftMax and rightMax

* Water stored at index:

* min(leftMax, rightMax) - height[i]


**Sum water for all indices**

Time Complexity: O(n)
Space Complexity: O(n)
