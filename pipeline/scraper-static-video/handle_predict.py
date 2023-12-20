import tensorflow as tf
import pickle
import os
from keras.preprocessing import sequence
from preprocessing import preprocessing

model_path = os.path.join(os.getcwd(), 'model/Text_CNN_model_v1.h5')
model = tf.keras.models.load_model(model_path)
tknz_path = os.path.join(os.getcwd(), 'model/tokenizer.pickle')
with open(tknz_path, "rb") as f:
    tokenizer = pickle.load(f)


def predict(commentRecord):
    processed_comment = preprocessing(commentRecord["message_content"])
    seq_comment = tokenizer.texts_to_sequences([processed_comment])
    ds_comment = sequence.pad_sequences(seq_comment, maxlen=100)
    pred = model.predict(ds_comment)
    hsd_dt = pred.argmax(-1)

    result = "NEG"
    if int(hsd_dt[0]) == 0:
        result = "POS"

    commentRecord["type_comment"] = result

    return commentRecord
