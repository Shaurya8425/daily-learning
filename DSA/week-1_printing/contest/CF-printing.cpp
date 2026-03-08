#include <bits/stdc++.h>
using namespace std;

string checkPalindrome(long long n) {
  long long result = 0;
  long long original=n;
  while (n != 0) {
    result = result * 10 + n % 10;
    n /= 10;
  }
  if(original==result)
    return "YES";
  else
    return "NO";
}

int main() {
  long long n;
  cin >> n;
  cout << checkPalindrome(n);
  return 0;
}