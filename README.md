## flask
### A sample vulnerable Python application

### Requirements:

```
  bandit==1.7.0
  click==8.0.1
  Flask==2.0.1
  Flask-WTF==0.15.1
  itsdangerous==2.0.1
  Jinja2==3.0.1
  MarkupSafe==2.0.1
  python-dotenv==0.19.0
  Werkzeug==2.0.1
  WTForms==2.3.3
```

### How to get started?

```git clone <repo url>```

```apt install python3 -y```

```. ./venv/bin/activate```

```pip install -r requirements.txt```

```flask run```

### How to run Bandit?

``` bandit -r ./server/ -f json -o reports/results.json ```
