import { Request, Response } from 'express';

interface Song {
  id: number;
  title: string;
  href?: string;
}

const songs: Song[] = [
  {
    id: 1,
    title: 'After Hours',
    href: 'https://open.spotify.com/intl-de/track/2p8IUWQDrpjuFltbdgLOag',
  },
  {
    id: 2,
    title: "We Still Don't Thrust You",
    href: 'https://open.spotify.com/intl-de/track/7sVbKoBdhXtYCEOO6qC1SN',
  },
  {
    id: 3,
    title: 'I GOT YOU',
    href: 'https://open.spotify.com/intl-de/track/0mgveJEIGjcN51w4JIQtI6',
  },
];

export const getSongs = (req: Request, res: Response) => {
  res.status(200).json({ songs: songs });
};

export const createSong = (req: Request, res: Response) => {
  const body: Song = req.body;
  if (!body.title) res.status(400).json({ error: 'Missing title' });
  else {
    const obj: Song = {
      ...body,
      id: songs.length + 1,
    };
    songs.push(obj);
    res.status(200).json({ song: obj });
  }
};

export const deleteSong = (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) res.status(400).json({ error: 'Missing id' });
  else {
    const i = songs.findIndex((s) => s.id === Number.parseInt(id, 10));
    if (i >= 0) {
      const song = songs.splice(i, 1);
      res.status(200).json({ song });
    }
    res.status(400).json({ error: 'Bad id input' });
  }
};

export const editSong = (req: Request, res: Response) => {
  const id = req.params.id;
  const body: Song = req.body;
  const i = songs.findIndex((s) => s.id === Number.parseInt(id, 10));
  if (i >= 0) {
    songs[i] = body;
    res.status(200).json({ song: body });
  } else {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
