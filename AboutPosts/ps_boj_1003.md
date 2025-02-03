---
title: "백준 #1003: 피보나치 함수"
date: "2025-02-03"
category: "CS Field > PS Study > 백준 문제풀이"
---

### 문제 설명
다음 소스는 N번째 피보나치 수를 구하는 C++ 함수이다.  
```cpp
int fibonacci(int n) {
    if (n == 0) {
        printf("0");
        return 0;
    } else if (n == 1) {
        printf("1");
        return 1;
    } else {
        return fibonacci(n‐1) + fibonacci(n‐2);
    }
}
```

N이 주어졌을 때, fibonacci(N)을 호출했을 때, 0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오.

[문제 링크](https://www.acmicpc.net/problem/1003)

---

### 입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.

각 테스트 케이스는 한 줄로 이루어져 있고, N이 주어진다. N은 40보다 작거나 같은 자연수 또는 0이다.

---

### 출력
각 테스트 케이스마다 0이 출력되는 횟수와 1이 출력되는 횟수를 공백으로 구분해서 출력한다.

---

### C++ 코드
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    vector<pair<long,long>> fib_cnt(41);
    fib_cnt[0].first = 1;
    fib_cnt[0].second = 0;
    fib_cnt[1].first = 0;
    fib_cnt[1].second = 1;

    for (int i = 2;i<41;i++){
        fib_cnt[i].first = fib_cnt[i-1].first + fib_cnt[i-2].first;
        fib_cnt[i].second = fib_cnt[i-1].second + fib_cnt[i-2].second;
    }

    int t;
    cin >> t;
    vector<int> vec(t);
    for (int i = 0;i<t;i++){
        cin >> vec[i];
    }
    for (int i = 0;i<t;i++){
        cout << fib_cnt.at(vec[i]).first << ' ' << fib_cnt.at(vec[i]).second << '\n';
    }
    return 0;
}
```


---
vector<pair<int,int>>구조를 기반으로 구현하면 쉽게 구현할 수 있다.  
이 문제에서 짚고 넘어갈 만한 점은, DP를 기반으로 문제를 풀었다는 점이다. 이하 chatgpt에게 부탁해 본 내용을 추가한다.  
  
---

### ✨ DP(동적 계획법)와의 연관성

이 문제는 **재귀 호출을 그대로 사용하면 중복 연산이 너무 많아져서 비효율적**이기 때문에,  
이를 최적화하기 위해 **동적 계획법(DP, Dynamic Programming)**을 활용했다.

#### 📌 DP의 핵심 개념
1. **최적 부분 구조 (Optimal Substructure)**  
   - `fibonacci(n)`은 `fibonacci(n-1)`과 `fibonacci(n-2)`의 값을 이용하여 계산할 수 있음.  
   - 즉, **큰 문제를 작은 문제로 쪼개어 해결 가능**하다.

2. **중복 부분 문제 (Overlapping Subproblems)**  
   - `fibonacci(n)`을 구할 때, 같은 값이 반복적으로 호출됨.  
   - 예를 들어, `fibonacci(5)`를 구하면 `fibonacci(3)`, `fibonacci(2)`가 여러 번 호출됨.  
   - 따라서 **이전에 계산한 값을 저장해 중복 연산을 줄이면 훨씬 빠르게 해결 가능!**

#### 📌 이 문제에서 적용된 DP 방식
- **Bottom-Up (바텀업) 방식의 DP**를 적용  
  - 작은 문제부터 해결하며 값을 누적 저장하는 **테뷸레이션(Tabulation) 기법** 사용  
  - `fib_cnt[i]` 배열을 이용하여 `0`과 `1`이 호출된 횟수를 누적 계산  
  - **반복문을 활용하여 중복 연산을 피하고, `O(N)` 시간 복잡도로 최적화**  

#### 📝 결론
이 문제를 통해 **재귀 호출을 그대로 쓰면 비효율적이지만, DP를 사용하면 효율적으로 해결 가능하다는 점**을 알 수 있다.  
DP는 **최적 부분 구조와 중복 부분 문제를 가진 문제에서 강력한 도구**가 되며,  
실제 문제 해결에서도 **경로 탐색, 문자열 처리, 최적화 문제 등 다양한 분야에서 활용**된다.

앞으로 DP 문제를 풀 때는,
1️⃣ **현재 문제를 작은 문제로 나눌 수 있는지**  
2️⃣ **이전에 계산한 값을 활용할 수 있는지**  
를 고민하며 접근하면 훨씬 쉽게 해결할 수 있을 것이다! 🚀

