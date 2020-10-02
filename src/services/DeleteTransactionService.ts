import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
// import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO
    const transactionRepository = getCustomRepository(TransactionsRepository);
    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError("Transaction doesn't exist");
    }

    await transactionRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
