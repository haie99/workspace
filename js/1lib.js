/*-----------------------------------------
두 수 a,b에 대한 절대값을 반환하는 함수임 _0918
-----------------------------------------*/

//자주할 업무는 재사용을 위해 함수로 정의
//두 수 a,b에 대한 절대값을 반환하는 함수
function getAbs(a,b){
//두 수를 대상으로 절대값을 구하는 식
return Math.abs(a-b);//함수를 호출한 실행부가 결과를 가지고 
                        //호출한 곳으로 되돌아감
}     

/*-----------------------------------------
랜덤 구하는 함수
n을 넣으면 0~n까지포함해서
 랜덤한 수를 반환하는 함수 _0918
-----------------------------------------*/
function getRandom(n){
    //3
    var r = Math.random(); //1보다 작은 실수 0.0xxxx~ 0.9xxxxx
    return Math.floor((n+1) * r); //소수점을 버린다 floor(바닥값)
}
/*-----------------------------------------
랜덤 구하는 함수2
ex)7과 23사이의 랜덤값 반환_0918
-----------------------------------------*/
/*최대값에서 최소값을 빼고 1을 더해야 0부터 시작하기 때문에 */
function getRandomBetween(min,max){
    //일단 최소값 이상은 무조건 반환되야 한다
    //return Math.floor(Math.random()*(max-min+1 ) )+ min; 아래와 같은 말
    return getRandom(max-min)+min;
}
/*-----------------------------------------
숫자에 0붙인 날짜 처리
매개변수, 즉 인수로 수를 전달하면, 함수내에서 알아서
0을 붙여줌
(두자리 한자리 판단 마저도 여기서 해준다) _0918
-----------------------------------------*/
function getZeroDate(n){
    //n이 10보다 작으면 0을 접두어로 붙이자
    if (n<10){
        n = "0" + n
    }
    return n;
    

} 

















