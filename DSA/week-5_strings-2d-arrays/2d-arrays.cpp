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
  for (int j = 0; j < m; j++) {
    if (j % 2 == 0) {
      for (int i = 0; i < n; i++) {
        cout << arr[i][j] << " ";
      }
    } else {
      for (int i = n - 1; i >= 0; i--) {
        cout << arr[i][j] << " ";
      }
    }
  }
  return 0;
}