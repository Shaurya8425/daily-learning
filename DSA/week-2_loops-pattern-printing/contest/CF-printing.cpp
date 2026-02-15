#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= n; i++) {
        // leading spaces
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        for (int j = 1; j <= i; j++) {
            if (j == 1 || j == n || j == i)
                cout << "* ";
            else
                cout << " ";
        }
        cout << endl;
    }
    return 0;
}