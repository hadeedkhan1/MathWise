<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MathWise App</title>
  <link rel="stylesheet" href="style.css">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex-direction: column;
    }
    .app-header {
      background-color: #4CAF50;
      color: white;
      padding: 20px;
      text-align: center;
      width: 100%;
      font-size: 24px;
      font-weight: bold;
      position: absolute;
      top: 0;
    }
    .cta-button {
      background-color: #4CAF50;
      color: white;
      padding: 15px 30px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      margin-top: 20px;
    }
    .cta-button:hover {
      background-color: #45a049;
    }
    .links {
      margin-top: 20px;
      text-align: center;
    }
    .links a {
      color: #4CAF50;
      text-decoration: none;
      margin: 0 10px;
      font-size: 16px;
    }
    .links a:hover {
      text-decoration: underline;
    }
    .app-footer {
      text-align: center;
      font-size: 0.8em;
      color: #666;
      padding: 10px;
      background-color: #f0f0f0;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>
  <div class="app-header">
    MathWise App
  </div>
  <a href="chat.html" class="cta-button">Chat with MathWise</a>
  <div class="links">
    <a href="updates.html">Updates</a>
    <a href="about.html">About</a>
    <a href="mailto:support@mathwise.help">Contact</a>
  </div>
  <div class="app-footer">
    &copy; 2024 MathWise
  </div>
</body>
</html>
