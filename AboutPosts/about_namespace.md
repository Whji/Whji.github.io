---
title: "C++ namespace 관련 기본 개념 정리"
date: "2025-01-30"
category: "CS Field > PS Study > C++ 개념정리"
---

C++ 문제를 풀다 보면 늘 다음과 같이 적고 시작한다.  
  
```cpp
#include <iostream>

using namespace std;

int main() {
    ...
    return 0;
}
```  
여기서 ```#include <iostream>```은 많이 본 코드이다. 전처리 시 iostream 파일의 내용을 가져와서 코드 앞에 붙이라는 의미이다.  
뒤의 ```using namespace std;```에 대해 알아보자.  
---
우선 namespace의 개념에 대해 알아보자.  
"Namespace is a context for identifiers, a logical grouping of names used in a program."
즉, 프로그램에서 사용되는 name에 대한 group이다. C++에서는 다음과 같이 사용된다.  
```cpp
#include <iostream>

namespace January {
    int date = 31;
}
namespace February {
    int date = 28;
}

using namespace January;
using namespace February;
using namespace std;

int main() {
    int date = 1;
    ...
    January::date; //31 의미
    February::date; //28 의미
    date; // 1 의미
    ...
}
```
이렇게 동일한 name(Programming lanugage에서 정식으로 identifier라 칭한다.)에 대해 이들의 소속을 의미하는 개념이 namespace이다.  

그래서, ```using namespace std;```를 사용하는 이유는?  
C++ 표준 라이브러리에 담긴 다양한 Identifier들(함수 이름, 변수 이름 등등..)은 모두 standard namespace에 정의되어 있기 때문에, 위의 문구를 통해 간편하게 std namespace 내의 Identifier를 사용한다.

---
#### References
MDN-namespace (https://developer.mozilla.org/en-US/docs/Glossary/Namespace)
