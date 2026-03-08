void oneTon(int n) {
  for (int i = 1; i <= n; i++) {
    cout << i << "\n";
  }
}

void nToOne(int n) {
  for (int i = n; i >= 1; i--) {
    /* if (i == 1)
      cout << i;
    else
      cout << i << ' '; */

    // better approach, works regardless what the values r, not hardcoaded to 1
    if (i != n) cout << ' ';
    cout << i;
  }
}

void countNumbers(int arr[], int num) {
  int p = 0, n = 0, e = 0, o = 0;
  for (int i = 0; i < num; i++) {
    if (arr[i] != 0) {
      if (arr[i] < 0) {
        n++;
      } else {
        p++;
      }
    }
    if (arr[i] % 2 == 0) {
      e++;
    } else {
      o++;
    }
  }
  cout << p << "\n" << n << "\n" << e << "\n" << o;
}

long long sumFirstN(int n) {
  long long sum = 0;
  for (int i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

long long reverseNum(long long n) {
  if (n < 0) {
    cout << '-';
    n = -n;
  }
  long long result = 0;
  while (n != 0) {
    result = result * 10 + n % 10;
    n /= 10;
  }
  return result;
}