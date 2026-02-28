#include <bits/stdc++.h>
using namespace std;

void inputArray(vector<vector<int>>& arr) {
  for (size_t i = 0; i < arr.size(); i++) {
    for (size_t j = 0; j < arr[i].size(); j++) {
      cin >> arr[i][j];
    }
  }
}

string search2DMatrix(vector<vector<int>>& arr, int target) {
  for (size_t i = 0; i < arr.size(); i++) {
    for (size_t j = 0; j < arr[0].size(); j++) {
      if (arr[i][j] == target) {
        return "true";
      }
    }
  }
  return "false";
}

int main() {
  int n, m, target;
  cin >> n >> m >> target;
  vector<vector<int>> arr(n, vector<int>(m));
  inputArray(arr);
  cout << search2DMatrix(arr, target);
  return 0;
}