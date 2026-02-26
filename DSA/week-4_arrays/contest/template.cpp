#include <bits/stdc++.h>
using namespace std;

void inputArray(vector<int>& arr) {
  for (size_t i = 0; i < arr.size(); i++) {
    cin >> arr[i];
  }
}

int pairSum() {
  int n, target;

  cin >> n>>target;
  vector<int> arr(n);
  inputArray(arr);

  int count = 0;
  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      for (int k = j + 1; k < n; k++) {
        for (int l = k + 1; l < n; l++) {
          if (arr[i] - 2 * arr[j] + 3 * arr[k] - 4 * arr[l] == target) count++;
        }
      }
    }
  }

  return count;
}

int main() {
  cout << pairSum();
  return 0;
}