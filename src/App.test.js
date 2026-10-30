import { fireEvent, render, screen } from '@testing-library/react';
import UserList from './userList';

const originalFetch = global.fetch;

afterEach(() => {
  if (originalFetch) {
    global.fetch = originalFetch;
  } else {
    delete global.fetch;
  }
});

test('renders users and filters them by name', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () =>
      Promise.resolve([
        { id: 1, name: 'Leanne Graham', email: 'leanne@example.com' },
        { id: 2, name: 'Ervin Howell', email: 'ervin@example.com' },
      ]),
  });

  render(<UserList />);

  expect(await screen.findByRole('heading', { name: 'Leanne Graham' })).toBeInTheDocument();
  expect(screen.getByText('leanne@example.com')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Ervin Howell' })).toBeInTheDocument();

  fireEvent.change(screen.getByRole('textbox', { name: 'Search users by name' }), {
    target: { value: 'ervin' },
  });

  expect(screen.getByRole('heading', { name: 'Ervin Howell' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Leanne Graham' })).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/users'
  );
});

test('adds and removes a user from favorites', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () =>
      Promise.resolve([
        { id: 1, name: 'Leanne Graham', email: 'leanne@example.com' },
      ]),
  });

  render(<UserList />);

  const addButton = await screen.findByRole('button', {
    name: 'Add to favorites',
  });
  fireEvent.click(addButton);

  expect(screen.getByRole('heading', { name: 'Favorite Users' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Remove from favorites' })).toHaveAttribute(
    'aria-pressed',
    'true'
  );

  fireEvent.click(screen.getByRole('button', { name: 'Remove from favorites' }));

  expect(screen.getByText('No favorite users found.')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Add to favorites' })).toHaveAttribute(
    'aria-pressed',
    'false'
  );
});
