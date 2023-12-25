import tensorflow as tf
import pickle
import os
from keras.preprocessing import sequence
from preprocessing import preprocessing

model_path = os.path.join(os.path.dirname(__file__), 'model/Text_CNN_model_PhoW2V.h5')
model = tf.keras.models.load_model(model_path)
tokenizer_path = os.path.join(os.path.dirname(__file__), 'model/tokenizer.pickle')
with open(tokenizer_path, "rb") as f:
    tokenizer = pickle.load(f)

MAX_LEN = 100

def predict(commentRecord):
    processed_comment = preprocessing(commentRecord["message_content"])
    seq_comment = tokenizer.texts_to_sequences([processed_comment])
    ds_comment = sequence.pad_sequences(seq_comment, maxlen=MAX_LEN)
    pred = model.predict(ds_comment)
    hsd_dt = pred.argmax(-1)

    result = "NEG"
    if int(hsd_dt[0]) == 0:
        result = "POS"

    commentRecord["type_comment"] = result

    return commentRecord
