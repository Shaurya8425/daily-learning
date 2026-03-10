#include <bits/stdc++.h>
using namespace std;

int countGoodN(int arr[], int n) {
  int count = 0;
  for (int i = 0; i < n; i++) {
    if (arr[i] != 0 && (18 % arr[i] == 0 || arr[i] % 45 == 0)) {
      count++;
    }
  }
  return count;
}

int main() {
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }
  cout << countGoodN(arr, n);
  return 0;
}