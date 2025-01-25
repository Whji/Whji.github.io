---
title: "R 기초 문법 정리"
date: "2025-01-25"
category: "Math Field > Statistics > R"
---

ALSM 공부 과정에서 R 기반 코드를 작성해야 하는 문제들이 있어서  
이를 위해 R 공부를 시작했다.  

1. 데이터 저장에 관해  
    - 모든 자료형은 기본적으로 vector로 저장된다.
    - list, data frame에는 서로 다른 자료형을 가진 값 저장 가능.
    - vector에는 반드시 동일한 자료형을 가진 값만 저장 가능.
    - c() 함수를 이용해서 만들 수 있다. a:b 하면 a부터 b까지 순차증가하는 수열이 만들어진다.
    - matrix() 함수 이용하면 행렬을 만들 수 있다.
    - factor, array도 있다. 
        - factor: 범주형 data (gender, grade 등등)
        - array: 다차원 data 구조
    - list: map structure로 사용도 가능하다. x <- list(name="whji",age="23", ...) 이 때 접근은 $name 식으로 접근
    - 아니 나 왜 벌써 23살임

2. 연산자에 관해
    - 기본적으로 사용하는 연산자 전부 동일하게 가능하다. 다만, 다음 연산자는 다르다.  
        - %% | %/% | /: 나머지 연산 | int형 나누기 연산 | 실수형 나누기 연산
        - ** : ^와 동일
        - & / && : 각각 vector 전체에 대한 / vector 첫 요소에 대한 and
        - | / || : or, 위와 동일

3. if/else, 반복문
    - 반복문은 python의 그것과 비슷하다. for n in vector 꼴 같이, java의 foreach() 문처럼 iterator로서 사용한다. while, repeat도 있다.
        - 종료시 break 필요.
    - if/else문도 비슷하다.
    - apply(데이터,margin(matrix일때 col/row 선택),function, ...) 함수: map 함수이다. lapply, mapply, sapply, tapply 등등 몇 개 많다.

4. 몇 가지 주요 함수
    - 입력/출력: scan() / cat(), print()
        - cat: 단순히 데이터 출력, 줄바꿈 안됨
        - print: index도 같이 나옴 & 줄바꿈 됨
    - all(x), any(x), which(x포함 조건): x의 모든값이 true이면 true / x의 하나라도 true이면 true / x원소들 중 조건 만족하는 index 출력
    - ifelse(): ifelse(조건,yes,no) = condition ? truebranch : falsebranch
    - table

5. 함수 선언
    - function(parameter) {... return(result)} 꼴로 선언. (return은 있어도 없어도 됨)
    - 가변 인자 선언 by ...
    - anonymous function(lambda function), closure 지원 / 기본적으로 higher order function(can use functions as param)

6. 파일 입출력
    - rwsl 가능
    - 읽기: read.csv("filenameorpath", ...) / read_excel("filenameorpath", ...) / read.table("filenameorpath", ...)  
    *엑셀 읽을때는 library(readxl) import해줘야.
    - 쓰기: read -> write
    - 저장하기: save(data,file="data.RData")
    - 불러오기: load("data.RData")
