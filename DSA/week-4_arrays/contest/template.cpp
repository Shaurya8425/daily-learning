#include <bits/stdc++.h>
using namespace std;

void inputArray(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }
}

void outputArray(int arr[], int n) {
  for (int i = n - 1; i >= 0; i--) {
    cout << arr[i] << " ";
  }
}

void reverseArray() {
  int n;
  cin >> n;
  int arr[n];
  inputArray(arr, n);
  outputArray(arr, n);
}

int main() {
  reverseArray();
  return 0;
}