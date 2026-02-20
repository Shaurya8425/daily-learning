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

void swap(int& a, int& b) {
  int c = a;
  a = b;
  b = c;
}

void sort01(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    for (int j = n; j >= 0; j--) {
      if (i < j) {
        if (arr[i] == 1 && arr[j] == 0) swap(arr[i], arr[j]);
      }
    }
  }
  /* after sorting print array */
  // printArray(arr, n);
}

void printArray(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
}

void swapAlternate(int arr[], int n) {
  for (int i = 0; i + 1 < n; i += 2) {
    swap(arr[i], arr[i + 1]);
  }
  printArray(arr, n);
}

void reverseArray(int arr[], int n) {
  int l = 0;
  int r = n - 1;
  while (l < r) {
    swap(arr[l], arr[r]);
    l++;
    r--;
  }
  printArray(arr, n);
}

int missingNumber(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    bool flag = false;
    for (int j = 0; j < n; j++) {
      if (i != j && arr[i] == arr[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) return arr[i];
  }
  return -1;
}

void arrayIntersection(int arr1[], int n1, int arr2[], int n2) {
  for (int i = 0; i < n1; i++) {
    for (int j = 0; j < n2; j++) {
      if (arr1[i] == arr2[j]) {
        cout << arr1[i];
        break;
      }
    }
  }
}

int pairSum(int arr[], int n, int target) {
  int count = 0;
  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == target) count++;
    }
  }
  return count;
}
int tripletSum(int arr[], int n, int target) {
  int count = 0;
  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      for (int k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] == target) count++;
      }
    }
  }
  return count;
}
int tripletSum(int arr[], int n, int target) {
  int count = 0;
  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      for (int k = j + 1; k < n; k++) {
        for (int l = k + 1; l < n; l++) {
          if (arr[i] + arr[j] + arr[k] + arr[l] == target) count++;
        }
      }
    }
  }
  return count;
}
int main() {
  // taking input logic
  int n1, target;
  cin >> n1 >> target;
  int arr1[n1];
  for (int i = 0; i < n1; i++) {
    cin >> arr1[i];
  }
  /* for (int i = 0; i < n2; i++) {
    cin >> arr2[i];
  } */

  // sort01(arr1, n1);
  // swapAlternate(arr1, n1);
  // reverseArray(arr1, n1);
  // cout << missingNumber(arr1, n1);
  // arrayIntersection(arr1, n1, arr2, n2);
  // cout << pairSum(arr1, n1, target);
  cout << tripletSum(arr1, n1, target);

  /* if (sortedOrNot(arr1, n1))
    cout << "Yes";
  else
    cout << "No"; */

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