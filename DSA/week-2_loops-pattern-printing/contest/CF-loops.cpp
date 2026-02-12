#include <bits/stdc++.h>
using namespace std;

int main() {
    long long int n;
    cin >> n;
    cout << n << endl;
    long long int newN = 0;
    while (n != 0) {
        newN = newN * 10 + n % 10;
        n /= 10;
    }
    cout << newN << endl;
    cout << (n == newN) << endl;
    if (n == newN)
        cout << "Yes";
    else
        cout << "No";
    return 0;
}