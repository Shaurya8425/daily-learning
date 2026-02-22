#include <bits/stdc++.h>
using namespace std;

void inputArray(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }
}

void outputArray(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
}

void ArrangeNum() {
  int n;
  cin >> n;
  int arr[n];

  for (int i = 0; i < n / 2; i++) {
    arr[i] = 2 * i + 1;
  }
  int even = 2;
  for (int j = n - 1; j >= n / 2; j--) {
    arr[j] = even;
    even += 2;
  }

  outputArray(arr, n);
}

int main() {
  ArrangeNum();
  return 0;
}