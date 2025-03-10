---
title: "Linear Model Ch.1"
date: "2025-03-04"
category: "CS Field > Coursework > Linear Model"
---

### 개요  
이 포스트에서는 **linear model ch.1**의 내용에 대해 복기한다.  

regression은, 기본적으로 data 간의 관계를 수학적 함수를 기반으로 분석하는 과정이다.
우선 data를 수집해서, "수학적으로" 분석하기 위한 과정에서 우리는 고려해야 할 점이 한 가지 있다.  
  
#### Real World와 Ideal World의 연결: Error term
Ideal한 관점에서, X와 Y 사이의 관계가 하나의 함수 f를 통해 완벽히 표현가능한 경우 $Y=f(X)$꼴로 표현할 수 있다.  
그런데, 우리가 real world에서 데이터를 수집하는 경우를 생각해 보자. X와 Y가 수학적으로 identical하게 완벽한 데이터가 수집되는 경우는 거의 없다고 볼 수 있다.  
  
이러한 경우, 우리는 기존의 $Y=f(X)$ term에 오차항 $\epsilon$을 추가하여  
$Y=f(X)+ \epsilon$ 꼴로 나타낼 수 있다.  
우리는 이제부터 수학적 분석을 위해 data의 무작위성을 error term을 통해 처리할 것이다.  
  

#### Simple Linear Regression Model
앞서 Regression Model은 Data 간의 관계를 함수를 기반으로 분석하는 과정이라 하였고, 이 과정에서 현실 세계의 data를 ideal한 상황에서 사용할 수 있도록 error term의 도입을 통해 해결하였다.  
  
이제 우리는 Data간의 관계를 분석하기 위해, 한 가지 수학적 가정(모델링)을 할 예정이다. 가장 기본적인 가정으로, X와 Y는 "선형적이다" 라는 가정은 data를 설명하는 데 있어 훌륭한 가정이라 할 수 있을 것이다.  
이러한 가정을 Simple Linear Regression Model이라 한다. 좀 더 구체적으로는:
1) (Linearity) $E(Y)=\beta_0 + \beta_1 X$
2) assumptions on Error term
    1) (Normality) error term 은 정규분포를 따른다.
    2) (Independent) each data에 대한 error은 독립이다.
    3) (Const. variance) error term의 variance는 X에 관계없이 언제나 일정하다.
  
  
이러한 4개 가정을 만족시키는 수학적 모델은 다음과 같이 표현되며:  
$Y_i = \beta_0 +\beta_1 X_i +\epsilon_i$ where $\epsilon_i ~ N(0, \sigma^2)$  
이를 *Simple Linear Regression Model*이라 한다.  
  


#### Estimation
궁극적인 목적은, 모집단의 값들인 $\beta_0$와 $\beta_1$을 추정하는 것이다. 이를 위해 우리는 두 가지 Estimation을 사용할 예정이다.  
  

  
##### LSE(Least Square Estimation)
우선적으로 Least Square Estimation을 통해 추정해 보자. 추정한 결과값들, 즉 estimator들은 각각 $b_0,b_1$로 두겠다.  
$$
\[
Q(\beta_0, \beta_1) = \sum_{i=1}^{n} \epsilon_i^2 = \sum_{i=1}^{n} (Y_i - \beta_0 - \beta_1 X_i)^2
\]
  
  
\[
(b_0, b_1) = \arg\min_{(\beta_0, \beta_1)} Q(\beta_0, \beta_1)
\]
$$
  

###### Estimation of $\beta_0$, $\beta_1$  
위의 식을 푸는 것이 곧 LSE를 수행하는 것이다. 
Q를 $\beta_0$, $\beta_1$로 각각 편미분하면 우리는 다음의 두 식을 얻는다;  
$$
\[
\left. \frac{\partial Q}{\partial \beta_0} \right|_{\beta_0 = b_0, \beta_1 = b_1} 
= -2 \sum_{i=1}^{n} (Y_i - b_0 - b_1 X_i) = 0
\]

\[
\left. \frac{\partial Q}{\partial \beta_1} \right|_{\beta_0 = b_0, \beta_1 = b_1} 
= -2 \sum_{i=1}^{n} X_i (Y_i - b_0 - b_1 X_i) = 0
\]
$$
이 두 식을 우리는 Normal Equation이라 하기로 했다.  
이 식들을 연립해서 $b_0$,$b_1$을 구하면 
$$
S_{xx} = \sum_{i=1}^{n} (X_i - \bar{X})^2
$$

$$
S_{yy} = \sum_{i=1}^{n} (Y_i - \bar{Y})^2
$$

$$
S_{xy} = \sum_{i=1}^{n} (X_i - \bar{X})(Y_i - \bar{Y})
$$
  
라 정의할 때,  
$$
b_1 = S_{xy} / S_{xx}
$$

$$
b_0 = \bar{Y} - b_1 \bar{X}
$$
를 얻는다.

LSE의 성질은 다음과 같다.
1) $b_0,b_1$은 $Y_i$에 대해 linear하다.
2) $b_0,b_1$은 UMVU(Uniformly Minimum Variance Unbiased estimator)이다. (이 경우 UMVU대신 BLUE(Best Linear Unbiased Estimator)라고도 한다.)


###### Estimation of Regression Function
이제 그러면 추정한 estimator을 기반으로 우리가 가정한 Model의 요소들을 하나씩 추정할 수 있다.  
  
우선 Regression Function을 추정해 보자.  
앞서 Simple Linear Regression Model은 X와 Y 사이 Linearlity 를 띤다고 하였다. 즉, 다음 성질을 만족한다.  
$E(Y) = \beta_0 + \beta_1 X$
이 상황에서, $\beta_0$과 $\beta_1$ 대신 $b_0$와 $b_1$을 plugging 함으로써 Estimated mean response값을 구할 수 있다.  
$$
\[
\hat{Y} = \widehat{\mathbb{E}}(Y) = b_0 + b_1 X
\]
$$

비슷하게, Estimated response at $X_i$는 다음과 같다.  
$$
\hat{Y_i} = \widehat{\mathbb{E}}(Y_i) = b_0 + b_1 X_i
$$
  
여기에서 우리는 Residual을 새롭게 정의한다.  
Residual $ e_i = Y_i - \hat{Y_i} $  
  
  
Fitted Regression Line의 성질을 살펴보면,  
1) Residual의 합 = 0  
2) Sum of Squared Residual = minimum of $Q(\beta_0, \beta_1)$  
3) $Y_i$의 합 = $\hat{Y_i}$의 합  
4) $X_{i}e_{i}$의 합 = 0  
5) $\hat{Y_i}e_i$의 합 = 0  
6) Regression line은 언제나 $(\bar{X},\bar{Y})$를 지난다.  
  
특히, 2,4,5번을 통해 우리는 다음과 같은 벡터 공간에서의 관계를 생각해볼 수 있다.  


###### Estimation of $\sigma^2$
다음으로 $\sigma^2$ 값을 추정해 보자.
결론부터 말하자면, $\hat{\sigma^2} = MSE$이다.  
$$ MSE = \text{Mean Squared Error(Residual)} = \frac{SSE}{n-2}$$
$$ SSE(SSR) = \text{Error(Residual) Sum of Squares} = \sum_{i = 1}^n e_{i}^2 = \sum_{i = 1}^n (Y_{i} - \hat{Y_{i}})^2
$$
위에서 n-2는 자유도(degree of freedom)이라 한다.  

또한, MSE는 unbiased estimator이다.

##### MLE(Maximum Likelihood Estimation)
Likelihood function을 통해서 동일한 방식으로 구해줄 수 있다. 
앞서 Simple Linear Regression Model의 평균과 표준편차를 생각하면, 우리는 dataset에서 $Y_i$들의 set에 대한 Likelihood function($Y_i$들이 그렇게 나온 경우에 대해, Linear Regression Model의 각 parameter에 따른 확률 함수)을 생각할 수 있다.  
$$
L(\beta_0, \beta_1, \sigma^2) = \prod_{i=1}^{n} f(y_i)
$$
  
$$
= \frac{1}{(2\pi\sigma^2)^{n/2}} \exp \left[ -\frac{1}{2\sigma^2} \sum_{i=1}^{n} (y_i - \beta_0 - \beta_1 X_i)^2 \right]
$$
  
  
  
Likelihood function이 최대가 되도록 하는 parameter의 모집단 분포가, 곧 가장 이 dataset을 잘 설명하는 모집단 분포라고 추측할 수 있을 것이므로, 구해보면  
$$
\tilde{\beta}_0 \quad = \quad \hat{\beta}_0 = b_0 \quad \quad : \quad \text{MLE} = \text{LSE}
$$

$$
\tilde{\beta}_1 \quad = \quad \hat{\beta}_1 = b_1 \quad \quad : \quad \text{MLE} = \text{LSE}
$$

$$
\tilde{\sigma}^2 \quad = \quad \frac{\text{SSE}}{n} = \frac{n-2}{n} \quad \text{MSE} = \frac{n-2}{n} \hat{\sigma}^2 \quad : \quad \text{MLE} \neq \text{MSE}
$$
를 얻는다.  

#### R example 간단 정리

앞으로 R은 렉처 노트에 나온 코드 기반으로 주석을 다는 정도로 공부하려고 한다.

```r
# R 기본 코드 정리

# 1. 데이터 불러오기 및 기본 확인
library(ALSM) #ALSM 라이브러리 이용
head(TolucaCompany)  # 데이터셋의 첫 몇 개 행 출력

# 2. 산점도(Scatter Plot) 시각화
## Base R 방식
plot(TolucaCompany$x, TolucaCompany$y, xlab='Lot Size', ylab='Hours',
     main='Toluca Company Example', pch=20, col='blue') #plot: 기본적인 그래프 그리는 함수. x축값, y축값, x축 label, y축 label, 제목, 점 모양

## ggplot2 방식
library(ggplot2) #ggplot2 라이브러리 이용
ggplot(data = TolucaCompany) + #ggplot: 레이어 쌓아서 그래프 그리는 함수, 더 복잡하지만 훨씬 깔끔하고 강력한 시각화 기능 제공 / ggplot 객체 생성 및 객체(리스트의 배열) 중 data 리스트에 TolucaCompany data 로드
  geom_point(aes(x = x, y = y), color='red') + # geom_point: 산점도 그리는 함수, aes: x값과 y값 선택 함수
  labs(title='Toluca Company Example', x='Lot Size', y='Hours') # 라벨 이름 할당 함수

# 3. 상관계수 계산
cor(TolucaCompany$x, TolucaCompany$y)
cor.test(TolucaCompany$x, TolucaCompany$y)  # 상관 유의성 검정
cov(TolucaCompany$x, TolucaCompany$y)  # 공분산 계산

# 4. 최소제곱법(OLS) 회귀 분석
fit = lm(y ~ x, data = TolucaCompany) #linear model 기반 Least Square Opt. 수행 및 fit에 저장
summary(fit)  # 회귀 분석 결과 요약 출력

```