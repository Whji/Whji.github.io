---
title: "Linear Model Ch.1"
date: "2025-03-04"
category: "CS Field > Coursework > Linear Model"
---

### 📌 개요  
이 포스트에서는 **Linear Model Chapter 1**에 대해 정리합니다.  
Linear Model 수업을 복습하며 핵심 개념과 수식을 요약하였습니다.  

---

### 🔍 학습 목표  
이 글을 통해 다음 내용을 이해할 수 있습니다:  
✅ [목표 1]  
✅ [목표 2]  
✅ [목표 3]  

---

### 📝 핵심 개념  

#### 1️⃣ 개념 정리: [주제명]  
- **정의:**  
  - [주제에 대한 간략한 설명]  
- **핵심 개념:**  
  - [핵심 개념 1]  
  - [핵심 개념 2]  

#### 2️⃣ 수식 및 직관적 이해  
- **기본 수식:**  
  $$ y = X\beta + \epsilon $$  
  - 여기서, \(X\)는 입력 행렬이고, \(\beta\)는 회귀 계수, \(\epsilon\)은 오차항이다.  
- **직관적 해석:**  
  - [수식이 의미하는 바를 쉽게 설명]  

#### 3️⃣ 예제 및 코드  
아래는 간단한 예제 코드입니다.  

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# 데이터 생성
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# 선형 회귀 모델 학습
model = LinearRegression()
model.fit(X, y)

# 결과 출력
print(f"기울기: {model.coef_[0]}, 절편: {model.intercept_}")
