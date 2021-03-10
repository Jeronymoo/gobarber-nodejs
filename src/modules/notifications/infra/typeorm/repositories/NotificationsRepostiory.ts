import { getMongoRepository, MongoRepository } from 'typeorm';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

import Notification from '../schemas/Notification';

class NotificationsRepostiory implements INotificationsRepository {
  private oremRepository: MongoRepository<Notification>;

  constructor() {
    this.oremRepository = getMongoRepository(Notification, 'mongo');
  }

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = this.oremRepository.create({
      content,
      recipient_id,
    });

    await this.oremRepository.save(notification);

    return notification;
  }
}

export default NotificationsRepostiory;
