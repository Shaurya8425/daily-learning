  for(int i=1;i<=5;i++){
    for(int j=i;j<=5;j++){
      cout<<"*";
    }
    cout<<endl;
  }

  for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
      if (i == 1 || i == 5 || j==(5-i)+1) {
        cout << '*';
      }else{
        cout<<' ';
      }
    }
    cout << endl;
  }