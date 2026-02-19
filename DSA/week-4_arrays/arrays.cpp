#include <bits/stdc++.h>

#include <iterator>
#include <vector>
using namespace std;

int maxNum(int v[], int n) {
  int max = v[0];
  for (int i = 1; i < n; i++) {
    if (max < v[i]) max = v[i];
  }
  return max;
}

int minNum(int v[], int n) {
  int min = v[0];
  for (int i = 1; i < n; i++) {
    if (min > v[i]) min = v[i];
  }
  return min;
}

int searchNums(int v1[], int n1, int v2[], int n2) {
  for (int i = 0; i < n1; i++) {
    int flag = 0;
    for (int j = 0; j < n2; j++) {
      if (v1[i] == v2[j]) {
        /* as u hit match change flag & break iteration for that element */
        flag = 1;
        break;
      }
    }
    /* if flag remains same it means element is missing as soon as u know this
     * just return 0 means all elements aren't there */
    if (flag == 0) return 0;
  }
  /* this means all found as flag changed to 1 */
  return 1;
}

int countOccurences(int arr[], int s, int n) {
  int count = 0;
  for (int i = 0; i < s; i++) {
    if (arr[i] == n) count++;
  }
  return count;
}

vector<int> countEOccurences(int v1[], int n1, int v2[], int n2) {
  vector<int> arr;
  for (int i = 0; i < n1; i++) {
    int count = 0;
    for (int j = 0; j < n2; j++) {
      if (v1[i] == v2[j]) count++;
    }
    arr.push_back(count);
  }
  return arr;
}

bool sortedOrNot(int arr[], int s) {
  for (int i = 0; i < s - 1; i++) {
    if (arr[i + 1] < arr[i]) return false;
  }
  return true;
}

int main() {
  int n1;
  cin >> n1;
  int arr1[n1];
  for (int i = 0; i < n1; i++) {
    cin >> arr1[i];
  }
  if (sortedOrNot(arr1,n1))
    cout << "Yes";
  else
    cout << "No";
  /* for (int i = 0; i < n2; i++) {
    cin >> arr2[i];
  } */

  /* int flag = searchNums(arr1, n1, arr2, n2);
  if (flag == 1)
    cout << "FOUND";
  else
    cout << "NOT FOUND"; */

  // solving curiously
  /* int v1[] = {1, 2, 3};
  int v2[] = {1, 2, 1, 3, 1};

  int a = 3, b = 5;

  vector<int> result = countEOccurences(v1, a, v2, b);
  for (int x : result) {
    cout << x << " ";
  } */

  // printing array
  /* for (int i = n - 1; i >= 0; i--) {
    cout << arr[i]<<" ";
  } */
  return 0;
}