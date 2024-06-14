import { io } from 'socket.io-client';
import { environment } from './hooks/environment'

export const socket = io(environment.urlSocket);