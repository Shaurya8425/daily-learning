#include <bits/stdc++.h>
using namespace std;

int main() {
  int n, m;
  cin >> n >> m;
  int arr[n][m];
  /* to make 2d arrays input u must use vector<int> */
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      cin >> arr[i][j];
    }
    cout << endl;
  }

  /* printing by row */
  /* for (int i = 0; i < n; i++) {
    if (i % 2 == 0) {
      for (int j = 0; j < m; j++) {
        cout << arr[i][j] << " ";
      }
    } else {
      for (int j = m - 1; j >= 0; j--) {
        cout << arr[i][j] << " ";
      }
    }
  } */

  /* if u want to print by column just interchange n,m & i,j */
  /* for (int j = 0; j < m; j++) {
    if (j % 2 == 0) {
      for (int i = 0; i < n; i++) {
        cout << arr[i][j] << " ";
      }
    } else {
      for (int i = n - 1; i >= 0; i--) {
        cout << arr[i][j] << " ";
      }
    }
  } */

  /* for (int j = 0; j < m; j++) {
    cout << arr[0][j] << " ";
  }
  for (int i = 1; i < n; i++) {
    cout << arr[i][m - 1] << " ";
  }
  for (int j = m - 2; j >= 0; j--) {
    cout << arr[n - 1][j] << " ";
  }
  for (int i = n - 2; i >= 1; i--) {
    cout << arr[i][0] << " ";
  } */

  int index = INT_MIN;
  int maxCount = 0;
  vector<int> indexArr;
  for (int i = 0; i < n; i++) {
    int count = 0;
    for (int j = 0; j < m; j++) {
      if (arr[i][j] == 1) count++;
    }
    if (count > maxCount) {
      maxCount = count;
      indexArr.clear();
      indexArr.push_back(i);
      index = i;
    } else if (count == maxCount) {
      indexArr.push_back(i);
    }
  }
  cout << index << endl;
  for (size_t i = 0; i < indexArr.size(); i++) {
    cout << indexArr[i]<<" ";
  }
  return 0;
}