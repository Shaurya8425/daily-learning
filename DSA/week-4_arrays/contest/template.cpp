#include <bits/stdc++.h>
using namespace std;

void inputArray(vector<int>& arr, int n) {
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }
}

void outputArray(vector<int>& arr, int n) {
  for (int i = 0; i < n; i++) {
    cout << arr[i] << "\n";
  }
}

int missingNumber() {
  int n;
  cin >> n;
  vector<int> arr(n);
  inputArray(arr, n);
  for (int i = 0; i < n; i++) {
    bool unique = true;
    for (int j = 0; j < n; j++) {
      if (i != j && arr[i] == arr[j]) {
        unique = false;
        break;
      }
    }
    if (unique) {
      return arr[i];  
    }
  }
  /* making sure we're returning something from this function. */
  return -1;
}

int main() {
  int t;
  cin >> t;
  vector<int> results;
  for (int i = 0; i < t; i++) {
    results.push_back(missingNumber());
  }
  outputArray(results, t);
  return 0;
}