import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  req.session && req.session.isLoggedIn ? next() : res.redirect('/login');
};

const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.isLoggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href='/logout'>Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href='/login'>Login</a>
      </div>
    `);
  }
});

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  // email
  //   ? res.send(`${email} - ${password}`)
  //   : res.send('The email is incorrect');

  if (
    email &&
    password &&
    email === 'balsys.tadas@gmail.com' &&
    password === '123'
  ) {
    req.session = { isLoggedIn: true };
    res.redirect('/');
  } else {
    res.send('The email is incorrect');
  }
});

router.get('/logout', requireAuth, (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/vip', requireAuth, (req: Request, res: Response) => {
  res.send(`Welcome to protected route`);
});

export { router };
