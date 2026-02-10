// Socket.IO Real-Time Communication Handler
const socket = io('http://localhost:5000');

class RealtimeMessaging {
  constructor() {
    this.currentRoom = null;
    this.currentUser = null;
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Connection events
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Message events
    socket.on('receive_message', (data) => {
      this.handleMessageReceived(data);
    });

    // Typing indicator
    socket.on('user_typing', (data) => {
      this.handleUserTyping(data);
    });

    socket.on('user_stopped_typing', (data) => {
      this.handleUserStoppedTyping(data);
    });
  }

  /**
   * Join a chat room
   */
  joinRoom(roomId, userId) {
    this.currentRoom = roomId;
    this.currentUser = userId;
    socket.emit('join_room', { room: roomId, userId });
  }

  /**
   * Leave current room
   */
  leaveRoom() {
    if (this.currentRoom) {
      socket.emit('leave_room', { room: this.currentRoom });
      this.currentRoom = null;
    }
  }

  /**
   * Send a message
   */
  sendMessage(message) {
    if (!this.currentRoom || !this.currentUser) {
      console.error('Not in a room or user not set');
      return;
    }

    socket.emit('send_message', {
      room: this.currentRoom,
      message,
      sender: this.currentUser,
      timestamp: new Date()
    });
  }

  /**
   * Send typing indicator
   */
  startTyping() {
    if (this.currentRoom) {
      socket.emit('typing', {
        room: this.currentRoom,
        userId: this.currentUser
      });
    }
  }

  /**
   * Stop typing indicator
   */
  stopTyping() {
    if (this.currentRoom) {
      socket.emit('stop_typing', {
        room: this.currentRoom,
        userId: this.currentUser
      });
    }
  }

  /**
   * Handle received message
   */
  handleMessageReceived(data) {
    console.log('Message received:', data);
    // Dispatch event for UI to handle
    const event = new CustomEvent('message_received', { detail: data });
    document.dispatchEvent(event);
  }

  /**
   * Handle user typing
   */
  handleUserTyping(data) {
    const event = new CustomEvent('user_typing', { detail: data });
    document.dispatchEvent(event);
  }

  /**
   * Handle user stopped typing
   */
  handleUserStoppedTyping(data) {
    const event = new CustomEvent('user_stopped_typing', { detail: data });
    document.dispatchEvent(event);
  }
}

// Initialize real-time messaging
const messaging = new RealtimeMessaging();

// Listen for messages
document.addEventListener('message_received', (e) => {
  console.log('New message:', e.detail.message);
  console.log('From:', e.detail.sender);
  console.log('Time:', e.detail.timestamp);
});

// Usage example:
/*
// Join a conversation
messaging.joinRoom('mentor-123-mentee-456', 'mentee-456');

// Send a message
messaging.sendMessage('Hello mentor!');

// Start typing indicator
messaging.startTyping();

// Stop typing indicator
messaging.stopTyping();

// Leave room
messaging.leaveRoom();
*/
