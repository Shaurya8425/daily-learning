#include <bits/stdc++.h>
using namespace std;

int factorial(int n) {
    if (n == 1 || n == 0) return 1;
    int result = 0;
    result += n * factorial(n - 1);
    return result;
}

// binomial coefficient
int nCr(int n, int r) {
    if (n < r) return 0;
    int result = factorial(n) / factorial(r) * factorial(n - r);
    return result;
}

void printSquare(int n, char ch) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            cout << ch << " ";
        }
        cout << endl;
    }
}

void printFactors(int n) {
    cout << 1 << " ";
    for (int i = 2; i <= n / 2; i++) {
        if (n % i == 0) cout << i << " ";
    }
    cout << n;
}

void printPrime(int n) {
    for (int i = 2; i <= n; i++) {
        bool isPrime = true;
        for (int j = 2; j*j <= i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            };
        }
        if (isPrime) cout << i << " ";
    }
}

int main() {
    cout << "Factorial" << endl;
    cout << factorial(5) << endl;

    cout << "Binomial Coefficient" << endl;
    cout << nCr(3, 2) << endl;

    cout << "Square of given character" << endl;
    printSquare(5, 'X');
    cout << endl;

    cout << "Finding factors of number" << endl;
    printFactors(15);

    cout << endl;
    cout << "Prime till n" << endl;
    printPrime(5);
    return 0;
}