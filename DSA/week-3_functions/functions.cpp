#include <bits/stdc++.h>
using namespace std;

int reverseStore(int num) {
    int newNum = 0;
    while (num != 0) {
        newNum = newNum * 10 + num % 10;
        num /= 10;
    }
    return newNum;
}

void pallindrome(int num) {
    int reversed = reverseStore(num);
    if (num == reversed)
        cout << "Yes.";
    else
        cout << "No.";
}

/*
for loop
for(initialization; condition; update){
  //code
}
*/