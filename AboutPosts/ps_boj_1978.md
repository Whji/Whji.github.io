---
title: "백준 #1978: 소수 찾기"
date: "2025-01-23"
category: "CS Field > PS Study > 백준 문제풀이"
---

### 문제 설명
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

[문제 링크](https://www.acmicpc.net/problem/1978)

---

### 입력
첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

---

### 출력
주어진 수들 중 소수의 개수를 출력한다.

---

### C++ 코드(My sol)
```cpp
#include <iostream>
#include <cmath>

using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n]={};
    int prime[11] = {2,3,5,7,11,13,17,19,23,29,31};
    for(int i =0;i<n;i++){
        cin >> arr[i];
    }
    for(int i =0;i<n;i++){
        cout << arr[i];
    }
    int num_p = 0;
    for (int i = 0;i<n;i++){
        int cnt = 0;
        for (int j = 0;j<11;j++){
            if (arr[i] != 1 && arr[i] != prime[j] && arr[i]%prime[j] != 0){
                cnt++;
            } else if (arr[i] == prime[j]) {
                cnt++;
            }
        }
        if(cnt == 11){
            num_p++;
        }
    }
    cout << num_p;
    return 0;

}
```

### C++ 코드(일반적인 정해 기반)
```cpp

#include <cmath>
#include <iostream>

using namespace std;

int main() {
    // 에라토스테네스의 체 구현
    int max_val = 1000;
    bool is_prime[1001];
    for (int i = 0; i < max_val + 1; i++) {
        is_prime[i] = true;
    }
    is_prime[1] = is_prime[0] = false;
    for (int i = 2; i < sqrt(max_val); i++) {
        if (is_prime[i]) {
            for (int j = i * i; j < max_val + 1; j += i) {
                is_prime[j] = false;
            }
        }
    }
    // input 처리
    int n;
    cin >> n;
    int arr[n] = {};
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        if (is_prime[arr[i]]) {
            cnt++;
        }
    }
    cout << cnt;
    return 0;
}
```

---
n의 소수 판별을 위해서는 sqrt(n) 이하의 소수에 대해서만 나눠보면 된다는 lemma를 기반으로 prime 배열을 만들어서 이중 반복문을 만들어 진행했다.  
실은 cnt랑 num_prime 변수 2개를 굳이 잡고 싶진 않았는데.. 오늘따라 머리가 너무 안 돌아갔다.    
근데 정해에서도 이중반복문을 만들긴 한다. 시간복잡도는 O(n log(log(n))) 이긴 하던데..  
시간복잡도 분석도 천천히 해 봐야겠다.  