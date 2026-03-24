import type { User } from './types';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <p>
        <strong>Jméno:</strong> {user.name}
      </p>
      <p>
        <strong>Věk:</strong> {user.age}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Adresa:</strong> {user.address}
      </p>

      {user.hobbies && (
        <p>
          <strong>Koníčky:</strong> {user.hobbies.join(', ')}
        </p>
      )}

      {user.isStudent !== undefined && (
        <p>
          <strong>Student:</strong> {user.isStudent ? 'Ano' : 'Ne'}
        </p>
      )}
    </div>
  );
}
