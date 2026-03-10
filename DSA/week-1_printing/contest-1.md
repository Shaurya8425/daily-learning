void helloCodeforces(int n) {
  for (int i = 1; i <= n; i++) {
    cout << "Hello Codeforces " << i << "\n";
  }
}

void isVowel(char ch) {
  if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
    cout << "YES";
  } else {
    cout << "NO";
  }
}

<!-- will come back to it -->
void secondLast(int n) {
  for (int i = n; i != 0; i = n / 10) {
    
  }
}

void leapYear(int n) {
  if (n % 400 == 0) {
    cout << "Yes";
  } else if (n % 100 == 0) {
    cout << "No";
  } else if (n % 4 == 0) {
    cout << "Yes";
  } else {
    cout << "No";
  }
}