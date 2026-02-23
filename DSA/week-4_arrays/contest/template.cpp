#include <bits/stdc++.h>
using namespace std;

void inputArray(vector<int>& arr, int n) {
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }
}

void outputArray(vector<int>& arr, int n) {
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
}

void swipe(int& a, int& b) {
  int temp = a;
  a = b;
  b = temp;
}

void swipeAlternate(int n) {
  vector<int> arr(n);
  inputArray(arr, n);
  for (int i = 0; i < n-1; i += 2) {
    swipe(arr[i], arr[i + 1]);
  }
  outputArray(arr, n);
}

int main() {
  int n;
  cin >> n;

  vector<int> input(n);
  inputArray(input, n);

  for (int i = 0; i < n; i++) {
    swipeAlternate(input[i]);
    cout<<"\n";
  }
  return 0;
}