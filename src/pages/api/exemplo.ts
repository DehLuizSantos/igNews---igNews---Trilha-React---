import { NextApiRequest, NextApiResponse } from 'next';

const Exemplo = (req: NextApiRequest, res: NextApiResponse) => {
  const user = [
    {
      nome: 'André',
      email: 'and_consul@outlook.com'
    }
  ];

  return res.json(user);
};

export default Exemplo;
