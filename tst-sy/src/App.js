import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [Messages, setMessages] = useState([
    { id: 1, writer: 'Writer1', message: 'Message 1', write_date: '2022-01-01' },
    { id: 2, writer: 'Writer2', message: 'Message 2', write_date: '2022-02-01' },
    { id: 3, writer: 'Writer3', message: 'Message 3', write_date: '2022-03-01' }
  ]);

  const [newMessage, setNewMessage] = useState({
    id: '',
    writer: '',
    message: '',
    write_date: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMessage({ ...newMessage, [name]: value });
  }

  const handleDeleteMessage = (id) => {
    const updatedMessage = Messages.filter((message) => message.id !== newMessage.id);
    setMessages(updatedMessage);
  }

  const handleAddMessage = () => {
    if (!newMessage.id || !newMessage.writer || !newMessage.write_date) {
      alert('모든 내용을 똑바로 입력해주세요.');
      return;
    }

    const isDuplicate = Messages.some(message => String(message.id) === id);
    if (isDuplicate) {
      alert('이미 존재하는 메세지 id 입니다. 다시 입력해주세요.');
      setNewMessage({ ...newMessage, ['id']: '' });
    }

    setMessages([...Messages, newMessage]);
    setNewMessage({ id: '', writer: '', message: '', write_date: '' });
  };

  return (
    <Router>
      <div className='MessageBox'>
        <nav>
          <ul>
            <li>
              <Link to="/" />
            </li>
            <li>
              <Link to="/create" />
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home Messages={Messages} onDeleteMessage={handleDeleteMessage} />} />
          <Route path='/create' element={<CreateMessage onInputChange={handleInputChange} onAddMessage={handleAddMessage} />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = (props) => {
  const { Messages, onDeleteMessage } = props;

  return (
    <div>
      <h1>Messages</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Writer</th>
            <th>Write Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Messages.map((message) => {
            <tr key={Messages.id}>
              <td>{Messages.id}</td>
              <td>{Messages.writer}</td>
              <td>{Messages.message}</td>
              <td>{Messages.write_date}</td>
              <td>
                <button onClick={() => onDeleteMessage(message.id)}>Delete</button>
              </td>
            </tr>
          })
          }
        </tbody>
      </table>
    </div>
  );
};

const CreateMessage = (props) => {
  const { newMessage, onInputChange, onAddMessage } = props;

  return (
    <div>
      <h1>Create Message</h1>
      <form>
        <div>
          <input
            type="number" name="id" 
            value={newMessage.id} onChange={onInputChange} placeholder="Input Message id"
          />
        </div>

        <div>
          <input type="text" name="writer" value={newMessage.writer}
            onChange={onInputChange} placeholder="Input Message writer"
          />
        </div>

        <div>
          <input
            type="text" name="content"
            value={newMessage.content} onChange={onInputChange}
            placeholder="Input Message content"
          />
        </div>

        <div>
          <label>작성일 : </label>
          <input type="date" name="write_date"
            value={newMovie.release_date} onChange={onInputChange}
          />
        </div>
      </form>

      <button onClick={onAddMessage}>Add Message</button>

    </div>

  );
};


export default App;
