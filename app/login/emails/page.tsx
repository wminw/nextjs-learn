import { fetchUsers } from '@/app/lib/data';

async function Emails() {
  const users = await fetchUsers();
  return <>{users?.map((user) => <div key={user.id}>{user.email}</div>)}</>;
}

export default Emails;
