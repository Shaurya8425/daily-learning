#include <bits/stdc++.h>
using namespace std;

void solidRectangle(int n, int m) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            cout << "*";
        }
        cout << endl;
    }
}

/*
Pyramid
Note: 2nd loop will be going to ith place in each iteration
*/

void invertedPyramid(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i + 1; j++) {
            cout << "*";
        }
        cout << endl;
    }
}

void hollowSquare(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (i == 1 || i == 5 || j == 1 || j == 5)
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }
}

/*
hollow rectangle
Note: only the position till which both loops will traverse gets changed nothing else.
*/

void numberRectangle(int n, int m) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            cout << i;
        }
        cout << endl;
    }
}

void alphabetRectangle(int n, int m) {
    for (int i = 1; i <= n; i++) {
        // char ch='A';
        for (int j = 0; j < m; j++) {
            cout << char(65 + j) << " ";
        }
        cout << endl;
    }
}

void numberedPyramid(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << i;
        }
        cout << endl;
    }
}

void binaryPyramid(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            if (i == j)
                cout << 0;
            else
                cout << "_ ";
        }
        cout << endl;
    }
}