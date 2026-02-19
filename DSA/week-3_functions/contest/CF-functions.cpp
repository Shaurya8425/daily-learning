#include <bits/stdc++.h>
using namespace std;

int hCf(int n1, int n2) {
  int s, l;
  if (n1 < n2) {
    s = n1;
    l = n2;
  } else {
    s = n2;
    l = n1;
  }
  int result = 1;
  for (int i = 1; i <= s; i++) {
    if (s % i == 0 && l % i == 0) result = i;
  }
  return result;
}

int main() {
  int n1, n2;
  cin >> n1 >> n2;
  cout << hCf(n1, n2);
  return 0;
}