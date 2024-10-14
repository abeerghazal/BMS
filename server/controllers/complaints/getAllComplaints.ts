import { Request, Response, NextFunction } from 'express';
import { ComplaintsModel, UserModel, FlatModel } from '../../models';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await ComplaintsModel.findAll({
      raw: true,
      include: [
        {
          model: UserModel,
          attributes: [], // Exclude User attributes
          include: [
            {
              model: FlatModel,
              attributes: ['flat_number'], // Only include flat_number
            },
          ],
        },
      ],
    });

    const result = data.map((complaint) => ({
      id: complaint.id,
      title: complaint.title,
      description: complaint.description,
      flat_number: complaint['User.Flats.flat_number'],
    }));

    res.json({ result });
  } catch (error) {
    next(error);
  }
};
