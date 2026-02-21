#include <iostream>
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

void printArray() {
  int n;
  cin >> n;
  int arr[n];
  inputArray(arr, n);
  outputArray(arr, n);
}

void arraySum() {
  int n;
  cin >> n;
  int arr[n];
  inputArray(arr, n);
  int sum = 0;
  for (int i = 0; i < n; i++) {
    sum += arr[i];
  }
  cout << sum;
}

void minimumElement() {
  int n;
  cin >> n;
  int arr[n];
  inputArray(arr, n);
  int min = arr[n];
  int index = n;
  for (int i = n - 1; i > 1; i--) {
    if (min >= arr[i]) {
      min = arr[i];
      index = i;
    }
  }
  cout << min << " " << index;
}

void maxelement() {
  int n;
  cin >> n;
  int arr[n];
  inputArray(arr, n);
  int max = arr[n];
  int index = n;
  for (int i = n - 1; i > 1; i--) {
    if (max <= arr[i]) {
      max = arr[i];
      index = i;
    }
  }
  cout << max << " " << index;
}

string search() {
  int n, target;
  cin >> n >> target;
  int arr[n];
  inputArray(arr, n);
  bool flag = false;
  for (int i = 0; i < n; i++) {
    if (arr[i] == target) flag = true;
  }
  if (flag)
    return "Yes";
  else
    return "No";
}

void countOccurences() {
  int n, target;
  cin >> n >> target;
  int arr[n];
  inputArray(arr, n);
  int count = 0;
  for (int i = 0; i < n; i++) {
    if (arr[i] == target) count++;
  }
  cout << count;
}

string sortedOrNot() {
  int n;
  cin >> n;
  int arr[n];
  inputArray(arr, n);
  for (int i = 0; i < n - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      return "NO";
    }
  }
  return "Yes";
}

int main() {
  // printArray();
  // arraySum();
  // minimumElement();
  // maxelement();
  // cout << search();
  // countOccurences();
  cout << sortedOrNot();

  return 0;
}