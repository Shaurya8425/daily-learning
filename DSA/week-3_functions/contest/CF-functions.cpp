#include <bits/stdc++.h>
using namespace std;

void prime(int n) {
  for (int i = 2; i <= n; i++) {
    int flag = 1;
    for (int j = 2; j*j <= i; j++) {
      if (i % j == 0) flag = 0;
    }
    if (flag == 1) cout << i<<" ";
  }
}

int main() {
  int n;
  cin >> n;
  prime(n);
  return 0;
}